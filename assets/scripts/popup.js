function PopUp (params) {
    'use strict';
    var popup = this;

    popup.callback = function(data) {
        foster.debug('callback popup');
    }

    popup.ClosePopup = function () {
        if (params.hasOwnProperty('itemsToClose')) {
            $(params.itemsToClose).show();
        }
        if (params.fade && !params.toggle) {
            $(params.popupContainer).fadeOut(params.fade);
        } else {
            $(params.popupContainer).hide();
        }
        sessionStorage.setItem('popupOpened', '0');
    };

    $(params.openButton).on(fosStartEvent, function () {
        if (params.closeOpened) {
            $('.popUp').not(params.popupContainer + ', .noHidePopUp').hide();
        }

        if (params.fade && !params.toggle) {
            $(params.popupContainer).fadeIn(params.fade);
        } else if (params.toggle) {
            $(params.popupContainer).toggle();
        } else {
            $(params.popupContainer).show();
        }

        if (params.hasOwnProperty('itemsToClose')) {
            if (params.toggle) {
                $(params.itemsToClose).toggle();
            } else {
                $(params.itemsToClose).hide();
            }
        }

        $(params.closeButton).off().on(fosStartEvent, function () {
            popup.ClosePopup();

            if (params.hasOwnProperty('tagClose')) {
                if (params.tagClose.hasOwnProperty('id')) {
                    sessionStorage.setItem('tagClose', JSON.stringify([params.tagClose.id, params.tagClose.type, params.tagClose.description, popup.callback]));
                } else {
                    sessionStorage.setItem('tagClose', params.tagClose);
                }
            }
        });

        if (params.hasOwnProperty('tag') && $(params.popupContainer).css('display') === 'block') {
            sessionStorage.setItem('popupOpened', '1');

            if (params.tag.hasOwnProperty('id')) {
                sessionStorage.setItem('tag', params.tag.id, params.tag.type, params.tag.description, popup.callback);
            } else {
                sessionStorage.setItem('tag', params.tag);
            }
        }

        if (params.hasOwnProperty('tagClose') && $(params.popupContainer).css('display') !== 'block') {
            sessionStorage.setItem('popupOpened', '0');

            if (params.tagClose.hasOwnProperty('id')) {
                sessionStorage.setItem('tagClose', params.tagClose.id, params.tagClose.type, params.tagClose.description, popup.callback);
            } else {
                sessionStorage.setItem('tagClose', params.tagClose);
            }
        }
    });
};
