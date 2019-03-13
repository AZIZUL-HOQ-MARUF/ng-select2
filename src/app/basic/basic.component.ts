import { Component, OnInit, Input } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  fruitList;
  fruit;
  public data1: Observable<Select2OptionData[]>;
  public options: Select2Options;
  public ajaxOptions: Select2AjaxOptions;

  constructor(private http: HttpClient) { 
  }


  ngOnInit(): void {
  }
  getUser() {
    let obj;
    this.http.get('https://reqres.in/api/2').subscribe(response => {
      let data = response['data'].map(data => {
            return { id: data.id, text: data.name }
      });

      this.data1 =  data;
      console.log(this.data1, 'data1')
    });

    

  }
  onButtonClick() {
    this.getUser();
  }
  /*
    public callAjax() {
      this.ajaxOptions = {
        url: 'https://reqres.in/api/2',
        dataType: 'json',
        delay: 250,
        cache: false,
        data: (params: any) => {
          console.log("AA", params);
          return {
            query: params.term,
            gotoPage: params.page
          }
        },
        processResults: (data: any, params: any) => {
          params.page = params.page || 1;
          console.log('data: ', data);
          return {
            results: $.map(data.data, function (obj) {
              return { id: obj.id };
            }),
            pagination: {
              more: (params.page * 10) < data.objectValue.total_count
            }
          };
        },
      };
  
      this.options = {
        ajax: this.ajaxOptions
      }
    }*/
}



