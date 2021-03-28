# Mk Decision UI Take Home

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Hosting

http://mk-decision.s3-website-us-east-1.amazonaws.com/

## Progress

1. Set up account ✅
2. Build form with Material-UI with proper validation and submission confirmation ✅
3. Host form within an S3 bucket ✅
4. On submit, the UI should call API Gateway to trigger a Lambda function ✅
5. The Lambda function should send an email using SES, and store the message in DynamoDB. ✅

I've completed all necessary steps required except for the fact that when making the POST request at the S3 host URL, a CORS error interrupts the network request.
Within my Postman client, hitting the API Gateway endpoint responds successfully (200) confirming that the email is sent and I can see that a new item has been stored in my DynamoDB.
After significant Googling, I have not been able to track down the CORS issue. The issue may lie in one of the below places:

1. S3 Cross-origin resource sharing (CORS) Permissions
2. Lambda function response headers
3. API Gateway CORS config
4. OR other digital cracks and crevices I have not yet looked at.
