

export default class ValidatorUtil {

    static isNull(value: any) {
        return !value
    }

    static isNotNull(value: any) {
        return !this.isNull(value);
    }

    static isNullOrEmpty(value: string) {
        return this.isNull(value) || value == ''
    }

    static isNotNullOrEmpty(value: string) {
        return this.isNotNull(value) && value != ''
    }
}