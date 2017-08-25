import { Component,TemplateRef } from '@angular/core';
import { OperatorServiceService } from "./operator-service.service";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  operators: any[]
  operator: string
  selectedOperator:string
  insert:boolean
  alert = {
    type:'',
    show:false,
    message:'',
    title:''
  }
  modal = {
    body: 'test',
    head: 'test'
  }
  public modalRef: BsModalRef;

  private updateOperators():void{
    this.operator = ''
    this.operatorService.getOperators().then(operators => {
      this.operators = operators
    })
  }

  private resetModal():void{
    this.modal.body ='',
    this.modal.head =''
  }

  private resetAlert():void{
    this.alert.type ='',
    this.alert.show = false,
    this.alert.message = '',
    this.alert.title = ''
  }

  private showModal(title:string, text:string,template: TemplateRef<any>):void{
    this.modal.body = text
    this.modal.head = title
    this.modalRef = this.modalService.show(template)
  }

  private showAlert(type:string,title:string,message:string):void{
    this.alert.type = type
    this.alert.title = title
    this.alert.message = message
    this.alert.show=true
  }

  /**
   * return true if operator name is exist
   * @param name 
   */
  private checkName(name:string):boolean{
    console.log(this.operators)
    let index = this.operators.findIndex(op => {
      return op.operatorName === name
    })
    return index > -1 ? true: false 
  }

  constructor(
    private operatorService: OperatorServiceService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.updateOperators()
    this.insert=false
  }

  public selectOperator(operator:any):void{
    this.operator = operator.operatorName
    this.selectedOperator = operator.id
    this.insert=false
  }

  public toggleInsert():void{
    this.insert = true
    this.operator = ''
    this.selectedOperator=undefined
    this.resetAlert()
  }

  public delete(template: TemplateRef<any>):void{
    if(this.selectedOperator === undefined){
      this.showModal('Error','Please select an operator first',template)
    }else{
      this.operatorService.deleteOperator(Number.parseInt(this.selectedOperator)).then(res=>{
        console.log(res)
        this.updateOperators()
      })      
    }
  }

  public save(template: TemplateRef<any>):void{
    if(this.operator.length < 1){
      this.showModal('Error','Please enter an operator name first',template)
    }else if(this.checkName(this.operator)){
      this.showModal('Error','Operator name already exist !!!',template)
    }else{
      this.operatorService.addOperator(this.operator).then(res => {
        if(res.success){
          this.showAlert('success','Success !!!','Successfully saved')
          this.updateOperators()
        }else{
          this.showAlert('warning','Error','Could not add the operator. Please Try again')
        }
      })
    }
  }
}
