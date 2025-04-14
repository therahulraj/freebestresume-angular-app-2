import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { PopupModal } from "../model/popup-modal.model";

@Injectable({providedIn: 'root'})
export class CommonVariablesService {

    private _popupModal: Subject<PopupModal> = new Subject();
    private _hidePopupModal: Subject<boolean> = new Subject();
    private _modalPopupButtonValue: Subject<string> = new Subject();
    templateModalView: Subject<boolean> = new Subject();
   
    emitPopupModal(popupModal: PopupModal) {
        this._popupModal.next(popupModal);
    }

    getPopupModal(): Subject<PopupModal>  {
        return this._popupModal;
    }
    
    public emitHidePopupModal(value: boolean) {
        return this._hidePopupModal.next(value);
    }

    public get hidePopupModal(): Subject<boolean> {
        return this._hidePopupModal;
    }

    emitModalPopupButtonValue(value: string) {
        this._modalPopupButtonValue.next(value);
    }

    public get modalPopupButtonValue(): Subject<string> {
        return this._modalPopupButtonValue;
    }

    private _CONTINUE_EMPTY_EDIT_EXPERIENCE = "CONTINUE_EMPTY_EDIT_EXPERIENCE";
    private _CANCEL_EDIT_EXPERIENCE = "CANCEL_EDIT_EXPERIENCE";

    private _CONTINUE_EMPTY_EXPERIENCE = "CONTINUE_EMPTY_EXPERIENCE";
    private _CANCEL_EXPERIENCE = "CANCEL_EXPERIENCE";
    
    private _CANCEL = "Cancel";
    
    
    public get CANCEL() {
        return this._CANCEL;
    }

    public get CANCEL_EXPERIENCE() {
        return this._CANCEL_EXPERIENCE;
    }

    public get CONTINUE_EMPTY_EXPERIENCE() {
        return this._CONTINUE_EMPTY_EXPERIENCE;
    }

    public get CONTINUE_EMPTY_EDIT_EXPERIENCE() {
        return this._CONTINUE_EMPTY_EDIT_EXPERIENCE;
    }

    public get CANCEL_EDIT_EXPERIENCE() {
        return this._CANCEL_EDIT_EXPERIENCE;
    }


}