
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BlobService {


  constructor(private httpClient: HttpClient) { }

// tslint:disable-next-line: max-line-length

  //thumbnailFetchUrl: string = 'https://southcentralus.api.cognitive.microsoft.com/vision/v2.0/generateThumbnail?width=100&height=100&smartCropp';
  thumbnailFetchUrl: string = ('http://localhost:8080/wish/getThumbnail');


  getBlobThumbnail(): Observable<Blob> {
    console.log('....AzureblobService.getBlobThumbnail()');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Ocp-Apim-Subscription-Key': 'change this'
    });

    return this.httpClient.post<Blob>(this.thumbnailFetchUrl,
      {
        url: 'http://acsazurestore.blob.core.windows.net/acsazurecontainer/Git-Logo-1788C.png'
      }, { headers, responseType: 'blob' as 'json' });
  }
}
