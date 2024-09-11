import Form from "./Form.js";

export default class extends Form {
    constructor(data) {
        super(data);
        this.type = "minicurso";
    }
}