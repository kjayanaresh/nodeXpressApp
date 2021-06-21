# nodeXpressApp
Basic Node Express App Get started

Build code
>npm run build

start server 
> node .\index.js 
    OR 
>npm run start


Get started: step-by-step

https://www.pullrequest.com/blog/intro-to-using-typescript-in-a-nodejs-express-project/


>docker build . -t <your username>/nodexpressApp

>docker images

>docker run -p 8080:8080 -d <your username>/nodexpressApp

# Get container ID
> docker ps

# Print app output
> docker logs <container id>

# Example
Running on http://localhost:8080


# Enter the container
> docker exec -it <container id> /bin/bash


#Test
> docker ps


> curl -i localhost:49160

CLI
>aws ecr get-login-password --region region | docker login --username AWS --password-stdin aws_account_id.dkr.ecr.region.amazonaws.com

PowerShell
>(Get-ECRLoginCommand).Password | docker login --username AWS --password-stdin aws_account_id.dkr.ecr.region.amazonaws.com

docker build -t <repo> 

>docker tag <image>:latest <acc_id>.dkr.ecr.us-west-2.amazonaws.com/<image>:latest

>docker push <acc_id>.dkr.ecr.us-west-2.amazonaws.com/<img>:latest