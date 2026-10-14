import { v4 as uuidv4 } from 'uuid';

export class FileUploadModel {
    ContentId: string;
    ContentType: string;
    FileName: string;
    FileType: string;
    FileSize: number;
    Base64Data: string;

    constructor(fileUpload?: any) {
        fileUpload = fileUpload || {};

        this.ContentId = fileUpload.ContentId || uuidv4();
        this.ContentType = fileUpload.ContentType || "";
        this.FileName = fileUpload.FileName || '';
        this.FileType = fileUpload.FileType || "";
        this.FileSize = fileUpload.FileSize || 0;
        this.Base64Data = fileUpload.Base64Data || "";
    }
}
