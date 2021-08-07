import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-line',
  templateUrl: './search-line.component.html',
  styleUrls: ['./search-line.component.scss']
})
export class SearchLineComponent implements OnInit {

  public searchColumn: any;
  public isSearchColumnValue = false;
  public loginForm: any = FormGroup;

  @Input() filterFields: any;
  @Input() filter: any;

  @Output() updateValue = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      searchRequest: ['', [Validators.required]],
      sorting: ''
    });
  }

  searchMethod(): void {
    this.isSearchColumnValue = !this.loginForm.get('sorting').value;
    if (this.loginForm.get('sorting').value && this.loginForm.get('searchRequest').value) {
      this.updateValue.emit({
        search: this.loginForm.get('searchRequest').value,
        searchColumn: this.loginForm.get('sorting').value,
      });
    }
  }

}
