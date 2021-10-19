
import { type, forModel } from "o-system/schema/model";
import { required, notNullOrEmpty } from "o-system/schema/validation";
let scheme = {
    type: {
        [type]: String,
        validators: [required, notNullOrEmpty],
    },
    id: {
        [type]: String,
        validators: [required, notNullOrEmpty],
    },
    name: {
        [type]: String,
        validators: [required, notNullOrEmpty],
    },
    code: {
        [type]: String,
        validators: [required, notNullOrEmpty],
    },
    color: {
        [type]: String,
        validators: [required, notNullOrEmpty],
    },
    currency: {
        [type]: String,
        validators: [required, notNullOrEmpty],
    },
    unit: {
        [type]: String,
        validators: [required, notNullOrEmpty],
    },
};
export function Validator(model) {
    let validate = errorsValidators(scheme, model);
    let check = haveErrorSpan();
    if (!validate.isValid && !check) {
        showError(validate.error);
        return false;
    }
    return (check ? false : true)
}

function errorsValidators(scheme, model) {
    let result = forModel(scheme).validate(model);
    return result;
}

function showError(errors = {}) {
    let keys = Object.keys(errors);
    keys.forEach((key) => {
        let el = document.querySelector(`.el-input__inner[${key}]`);
        let content = el.value;
        focusAndRemove(el);
        if (content == false || null) {
            createErrorHtlm(el, errors, key);
        }
    });
    return
}

function createErrorHtlm(targetErrorEl, errors, targetError) {
    let showErrorEl = document.createElement("span");
    showErrorEl.setAttribute("class", "error");
    showErrorEl.append(errors[targetError]);
    let parent = targetErrorEl.parentElement;
    parent.appendChild(showErrorEl);
}

export function focusAndRemove(targetErrorEl) {
    let bool = haveErrorSpan();
    let materialInputs = document.querySelectorAll(".materialInput");
    targetErrorEl.addEventListener("focus", () => {
        for (let i = 0; i < materialInputs.length; i++) {
            let errorsSpan =
                materialInputs[i].parentElement.getElementsByClassName("error")[0];
            if (errorsSpan == null || undefined || "") {
                continue;
            }
            !bool ? errorsSpan.remove() : false;
        }

    });

    return
}
function haveErrorSpan() {
    let errorSpans = document.querySelectorAll(".error");
    return (errorSpans.length === 0 ? false : true)
}