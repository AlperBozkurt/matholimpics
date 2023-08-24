import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent,ImageCropperComponent,LoadedImage  } from 'ngx-image-cropper';

@Component({
  selector: 'app-exam-maker',
  templateUrl: './exam-maker.component.html',
  styleUrls: ['./exam-maker.component.css']
})
export class ExamMakerComponent implements OnInit {

  display = 'none';
ulpoadedFiles: any = [];
cropImages: any = [];
cropImagesCount: any = 0;
imgId: any=0;
target: any = {};
files: any = {};
event: any = {};
developer: any = {};
frontEndLanguages: any = [];
backEndLanguages: any = [];
selectedBackEndItems: any = [];
selectedFrontEndItems: any = [];
imageChangedEvent: any = '';
croppedImage: any = '';
currentProcessingImg: any = 0;

finalImageList: any = [];

  constructor() {
 
   }

  ngOnInit(): void {
  }
  openModal() {
    this.display = 'block';
}

onCloseHandled() {
 this.imageChangedEvent = null;
 this.display = 'none';
}


fileChangeEvent(event: any): void {
 //Processing selected Images 
 for (var i = 0; i < event.target.files.length; i++) {
   this.imageProcess(event, event.target.files[i]);
 }
}

imageProcess(event: any, file: any) {
 //Setting images in our required format
 let reader = new FileReader();
 reader.readAsDataURL(file);
 reader.onload = (e) => {
   this.imgId = this.imgId + 1;
   this.ulpoadedFiles.push({ imgId: this.imgId, imgBase64: reader.result, imgFile: file });
 };
}

//get a Image using Image Id to crop
//cropping process done here 
cropImage(imgId: any) {
 this.currentProcessingImg = imgId;
 var imgObj = this.ulpoadedFiles.find((x: { imgId: any; }) => x.imgId === imgId);
 //created dummy event Object and set as imageChangedEvent so it will set cropper on this image 
 var event = {
   target: {
     files: [imgObj.imgFile]
   }
 };
 this.imageChangedEvent = event;
 this.openModal();
}

//Save Cropped Image locally
SaveCropedImage() {
 var imgObj = this.ulpoadedFiles.find((x: { imgId: any; }) => x.imgId === this.currentProcessingImg);
 //imgObj.imgBase64 = this.croppedImage;
 this.cropImages[this.cropImagesCount] = this.croppedImage;
 this.cropImagesCount = this.cropImagesCount + 1;
 this.onCloseHandled();
}

SaveAllImages() {
 this.finalImageList = null;
 this.ulpoadedFiles.forEach((imgObject: { imgBase64: any; }) => {

   this.finalImageList.push(imgObject.imgBase64);
 })
}

imageCropped(event: ImageCroppedEvent) {
 this.croppedImage = event.base64;
}
imageLoaded() {
 // show cropper
}
cropperReady() {
 // cropper ready
}
loadImageFailed() {
 // show message
}

}
