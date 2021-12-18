import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export class CdkLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloWorldFunction = new lambda.Function(this,
    	"KamransTestLambdaFunction",
    	{
    		code: lambda.Code.fromAsset("functions/helloworld"),
    		handler: "index.handler",
    		runtime: lambda.Runtime.NODEJS_12_X,
    		description: "This Lambda Function returns the message: 'Hello World!' in the response body",
    	});
  }
}
