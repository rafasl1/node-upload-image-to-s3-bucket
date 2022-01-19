import AWS from "aws-sdk"

export class AWSImageUploader {

  constructor() {}

  updateAWSConfiguration() {
    AWS.config.update({
      region: process.env.AWS_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    })
  }

  getUploadToS3Configuration(fileName, fileContent) {
    return {
      Bucket: process.env.AWS_S3_BUCKET,
      Key: fileName, 
      Body: fileContent 
    }
  }

  async uploadImageToS3(fileName, base64FileContent) {
    console.log(`Trying to insert '${fileName}' in bucket '${process.env.AWS_S3_BUCKET}'`)

    this.updateAWSConfiguration();

    const fileContent = Buffer.from(base64FileContent, 'binary');
    const s3 = new AWS.S3();

    s3.upload(
      this.getUploadToS3Configuration(fileName, fileContent),
      (error, data) => {
        if(error) {
          console.log(`An error ocurred while trying to upload: ${error}`);
          throw new Error(`Error while updating image to S3 Bucket: ${error}`);
        }
        console.log(`Image sucessfully uploaded to S3 Bucket! Check your AWS Console to check it out!`);
        return data;
      }
    )
  }
}