import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonVariablesService } from '../../services/common-variables.service';
import { PopupModal } from '../../model/popup-modal.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup-modal',
  imports: [CommonModule],
  templateUrl: './popup-modal.component.html',
  styleUrl: './popup-modal.component.css'
})
export class PopupModalComponent implements OnInit, OnDestroy {
  show: boolean = false;
  content: PopupModal = new PopupModal();
  subscriptions: Subscription = new Subscription();
  @ViewChild("popupModal") popupModal : ElementRef | undefined;
  cancelButtonValue = "";


  constructor(private commonVariablesService : CommonVariablesService) {}
  
  ngOnInit(): void {
    this.subscriptions.add(
      this.commonVariablesService.getPopupModal().subscribe(popupModalContent => {
        if (popupModalContent.text && popupModalContent.button) {
          this.content.text = popupModalContent.text;
          this.content.button = popupModalContent.button;
          this.getCancelButton();
          this.show = true;
        }
      })
    );

    this.subscriptions.add(
      this.commonVariablesService.hidePopupModal.subscribe(hide => {
        this.makeModalPopupEmpty();
        this.show = !hide;
      })
    )
  }

  @HostListener("click", ['$event'])
  onClickModal(event: Event) {
    if(event.target == this.popupModal?.nativeElement) {
      this.show = false;
    }
  }

  getCancelButton() {
    if (this.content?.button) {
      for (let button of this.content.button) {
        if (button.buttonText === this.commonVariablesService.CANCEL) {
          this.cancelButtonValue = button.buttonValue;
          break;
        }
      }
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  makeModalPopupEmpty() {
    this.content = new PopupModal();
    this.cancelButtonValue = "";
  }

  buttonClicked(value: string) {
    this.commonVariablesService.emitModalPopupButtonValue(value);
  }

}

