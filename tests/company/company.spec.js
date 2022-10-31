"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = __importDefault(require("../../src/entity/Company"));
test('should create a company', () => {
    const name = 'Ponto Menos';
    const company = new Company_1.default({
        cnpj: '123.123.123.01',
        email: 'vinicius@pontomenos.com',
        name
    });
    expect(company.name).toBe(name);
});
test('should not have id', () => {
    const name = 'Ponto Menos';
    const company = new Company_1.default({
        cnpj: '123.123.123.01',
        email: 'vinicius@pontomenos.com',
        name
    });
    expect(company.id).toBeUndefined();
});
