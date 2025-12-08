import cloudinary, { UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';
import { UnaryExpression } from 'typescript';


export function uploads(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
) : Promise<UploadApiErrorResponse | UploadApiResponse | undefined > {
  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        public_id,
        overwrite,
        invalidate,
        resource_type: 'auto', //zip, image
      },
      (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result as UploadApiResponse);
        }
      }
    );
  });
}


export function videoUpload(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
) : Promise<UploadApiErrorResponse | UploadApiResponse | undefined > {
  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        public_id,
        overwrite,
        invalidate,
        chunk_size: 50000,
        resource_type: 'video'
      },
      (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result as UploadApiResponse);
        }
      }
    );
  });
}