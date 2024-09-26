---
title: Serverless Home Lab with AWS CDK, Lambda, and LocalStack
date: 2024-09-26T11:16:51-07:00
draft: true
tags:
    - AWS
    - LocalStack
    - AWS Lambda
    - Docker
    - AWS CDK
    - Serverless
---


## Introduction

Let's up a local serverless environment using AWS CDK, LocalStack, and a simple Python Lambda function. We'll leverage the `PythonFunction` construct from the `aws-cdk.aws-lambda-python-alpha` to keep things simple.

## Prerequisites

Before we begin, make sure you have the following installed on your machine:

- [Python 3.7+](https://www.python.org/downloads/)
- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)
- [AWS CLI](https://aws.amazon.com/cli/)
- [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html)
- [Docker](https://www.docker.com/get-started)

## Setting Up LocalStack

[LocalStack](https://localstack.cloud/) is a fully functional local AWS cloud stack. It allows you to develop and test your cloud applications offline.

Install LocalStack using `pip`:

```bash
pip install localstack
```

Start LocalStack in detached mode:

```bash
localstack start -d
```

## Installing `awslocal` and `cdklocal`

`awslocal` is a lightweight wrapper that runs AWS CLI commands against LocalStack. Similarly, `cdklocal` allows you to deploy CDK applications to LocalStack.

Install `awslocal`:

```bash
pip install awscli-local
```

Install `cdklocal`:

```bash
npm install -g aws-cdk-local
```

## Creating a Simple Echo Lambda Function

Create a new directory for your project and navigate into it:

```bash
mkdir localstack-cdk-demo
cd localstack-cdk-demo
```

Initialize a new AWS CDK project in Python:

```bash
cdklocal init app --language python
```

Create a directory for your Lambda function:

```bash
mkdir lambda
```

Inside the `lambda` directory, create a file named `echo.py` with the following content. We can simply echo whatever `message` is input.
```python
def handler(event, context):
    message = event.get('message', 'Hello from Lambda!')
    return {
        'statusCode': 200,
        'body': message
    }
```

## Project Structure
```
localstack-cdk-demo/
├── .gitignore
├── README.md
├── app.py
├── cdk.json
├── lambda/
│   ├── requirements.txt
│   └── echo.py
├── localstack_cdk_demo/
│   ├── __init__.py
│   └── localstack_cdk_demo_stack.py
├── requirements-dev.txt
├── requirements.txt
```

### Why two requirements.txt?
You might want to use [lambda layers](https://github.com/aws-samples/aws-cdk-lambda-layer-builder), but for the sake of simplicity, let's put our `requirements.txt` in the `lambda` directory. The AWS CDK will automatically bundle your dependencies with the lambda deployment this way. If you know of a better way, please do reach out to me on GitHub!

## Adding Dependencies for Lambda Functions

When working with Lambda functions, it's often necessary to include external dependencies. To manage these dependencies efficiently, we'll create a `requirements.txt` file in the `lambda` directory.

Create a file named `requirements.txt` in the `lambda` directory:

## Defining the Infrastructure with CDK

First, add the `aws-cdk.aws-lambda-python-alpha` module to your `requirements.txt` file:

```
aws-cdk.aws-lambda-python-alpha
```

Install the required Python packages:

```bash
pip install -r ./lambda/requirements.txt
```

Now, open `localstack_cdk_demo/localstack_cdk_demo_stack.py` and replace its content with:

```python
from aws_cdk import (
    Stack,
    aws_lambda as _lambda,
    aws_lambda_python_alpha as lambda_python,
    aws_apigateway as apigateway,
)
from constructs import Construct

class LocalstackCdkDemoStack(Stack):

    def __init__(self, scope: Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

        # Define the Lambda function using PythonFunction
        echo_lambda = lambda_python.PythonFunction(
            self, 'EchoFunction',
            entry='lambda',
            index='echo.py',  # Optional if your main file is lambda_function.py
            handler='handler',
            runtime=_lambda.Runtime.PYTHON_3_8,
        )

        # Define the API Gateway REST API
        api = apigateway.LambdaRestApi(
            self, 'EchoApi',
            handler=echo_lambda,
            proxy=True
        )
```

The `PythonFunction` construct simplifies the process of defining Lambda functions by handling the packaging of your Python code and dependencies automatically.

## Bootstrapping the CDK (Optional)

If this is your first time deploying a CDK app to LocalStack, you may need to bootstrap the environment:

```bash
cdklocal bootstrap
```

## Deploying to LocalStack Using CDK

Install the required Python packages (if you haven't already):

```bash
pip install -r requirements.txt
```

Synthesize the CloudFormation template:

```bash
cdklocal synth
```

Deploy the stack:

```bash
cdklocal deploy
```

Confirm the deployment by typing `y` when prompted.

## Testing the Lambda via API Gateway

Once deployed, you will receive an endpoint URL. You can test the Lambda function by sending a request to this URL.

Use `curl` to send a POST request:

```bash
curl -X POST 'http://localhost:4566/restapis/<api-id>/prod/_user_request_' -d '{"message": "Hello, LocalStack!"}'
```

Replace `<api-id>` with the API ID from your deployment output.

You should receive a response:

```json
{
  "statusCode": 200,
  "body": "Hello, LocalStack!"
}
```

## Conclusion

You've successfully set up LocalStack, installed `awslocal` and `cdklocal`, created a simple Python Lambda function using the `PythonFunction` construct from the `aws-cdk.aws-lambda-python-alpha` module, mapped it to an API Gateway, and deployed it locally using the AWS CDK. This setup allows you to develop and test serverless applications entirely on your local machine.

