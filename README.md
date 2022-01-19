# node-upload-image-to-s3-bucket
NodeJS application to upload an image to a S3 Bucket on AWS. 

### How it works: 
* You must make a `POST` request to `/upload-image`
* The application will read the `base64-image.json` code attribute, wich contains the image that you want upload in base 64.
* The `AWSImageUploader` class will bufferize and configure your image and send to your S3 bucket based on your bucket credencials (located in .env)
* (WORK IN PROGRESS) The response will take back the path to your image stored on S3 bucket

### Requeriments: 
* Nodejs installed

### Running the project: 
* `$ git clone https://github.com/rafasl1/node-upload-image-to-s3-bucket.git`
* `$ cd node-upload-image-to-s3-bucket`
* `$ npm install`
* `$ npm start`
