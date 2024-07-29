"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var poupancaAccount_1 = require("./modules/Accounts/poupancaAccount");
var bankmanager_1 = require("./modules/BankManager/bankmanager");
var Client_1 = require("./modules/Clients/Client");
var ClientAccount_1 = require("./modules/Clients/ClientAccount");
console.log("--- criando cliente 1 ---");
var clientA = new Client_1.default("Talissa", "6556212121", "Rua 12", "2002-7-2", "AM", "MAO");
console.log(Object.entries(clientA));
console.log("--- criando cliente 2 ---");
var clientB = new Client_1.default("Rebeca", "2326212323", "Rua Amarela", "2002-1-2", "PR", "CWB");
console.log(Object.entries(clientA));
console.log("-- Criando Bank Manager 1 ");
var bankManagerA = new bankmanager_1.default("Raissa", "32732392", "2005-5-23", "AM", "MAO");
console.log("--- Imprimindo Bank Manager ");
console.log(Object.entries(bankManagerA));
console.log("--- criando Client AccountA--- ");
var clientAccountA = new ClientAccount_1.default(clientA, bankManagerA, "AM", "MAO");
console.log("-- Imprimindo Client Account-- ");
console.log(Object.entries(clientAccountA));
console.log("--- criando Client AccountB --- ");
var clientAccountB = new ClientAccount_1.default(clientB, bankManagerA, "AM", "MAO");
console.log("-- Imprimindo Client Account-- ");
console.log(Object.entries(clientAccountB));
console.log("-- Criando Poupanca Account --- ");
var poupancaAccountA = new poupancaAccount_1.default(clientA, true, "2023-4-30", 347, 0.1);
console.log("-- Imprimindo poupancaAccount");
console.log(Object.entries(poupancaAccountA));
console.log("-- Adicionando a conta poupança na cliente account --");
clientAccountA.addpoupancaAccount(poupancaAccountA);
console.log("-- Imprimindo ClientAccountA atualizada -- ");
console.log(Object.entries(clientAccountA));
// console.log("--- Realizando Deposito ---")
// const depositForClientAccountA = new Deposit(clientAccountA,"2023-8-5",100)
// depositForClientAccountA.processDeposit("Conta poupanca",347)
// console.log("-- Imprimindo ClientAccountA atualizada -- ")
// console.log(Object.entries(clientAccountA))
// console.log("-- Imprimindo contaPoupancaA atualizada -- ")
// console.log(Object.entries(poupancaAccountA))
// console.log("--- Realizando Saque ---")
// const withdrawnForClientAccountA = new Withdrawn(clientAccountA,"2023-8-5",20)
// withdrawnForClientAccountA.processWithdrawn("Conta poupanca",347)
// console.log("-- Imprimindo ClientAccountA atualizada -- ")
// console.log(Object.entries(clientAccountA))
// console.log("-- Imprimindo contaPoupancaA atualizada -- ")
// console.log(Object.entries(poupancaAccountA))
// console.log("--- Realizando Saque de valor alto ---")
// const withdrawnForClientAccountB = new Withdrawn(clientAccountA,"2023-8-5",200)
// withdrawnForClientAccountB.processWithdrawn("Conta poupanca",347)
// console.log("-- Imprimindo ClientAccountA atualizada -- ")
// console.log(Object.entries(clientAccountA))
// console.log("-- Imprimindo contaPoupancaA atualizada -- ")
// console.log(Object.entries(poupancaAccountA))
// console.log("-- Criando Current Account A --- ")
// const currentAccountA = new CurrentAccount(clientA,"2023-4-21",true,373,200)
// console.log("-- Imprimindo currentAccount")
// console.log(Object.entries(currentAccountA))
// console.log("-- Adicionando a conta corrente na cliente account --")
// clientAccountA.addcurrentAccount(currentAccountA)
// console.log("-- Imprimindo ClientAccountA atualizada -- ")
// console.log(Object.entries(clientAccountA))
// console.log("--- Realizando Deposito ---")
// const depositForClientAccountA = new Deposit(clientAccountA,"2023-7-5",100)
// depositForClientAccountA.processDeposit("Conta corrente",373)
// console.log("-- Imprimindo ClientAccountA atualizada -- ")
// console.log(Object.entries(clientAccountA))
// console.log("-- Imprimindo currentAccountA atualizada -- ")
// console.log(Object.entries(currentAccountA))
// console.log("--- Realizando Saque ---")
// const withdrawnForClientAccountA = new Withdrawn(clientAccountA,"2023-8-5",20)
// withdrawnForClientAccountA.processWithdrawn("Conta corrente",373)
// console.log("-- Imprimindo ClientAccountA atualizada -- ")
// console.log(Object.entries(clientAccountA))
// console.log("-- Imprimindo contacurrentA atualizada -- ")
// console.log(Object.entries(currentAccountA))
// console.log("--- Realizando Saque de valor alto ---")
// const withdrawnForClientAccountB = new Withdrawn(clientAccountA,"2023-8-5",200)
// withdrawnForClientAccountB.processWithdrawn("Conta corrente",373)
// console.log("-- Imprimindo ClientAccountA atualizada -- ")
// console.log(Object.entries(clientAccountA))
// console.log("-- Imprimindo currentAccountA atualizada -- ")
// console.log(Object.entries(currentAccountA))
// console.log("-- Criando Current Account B --- ")
// const currentAccountB = new CurrentAccount(clientB,"2023-4-21",true,723,300)
// console.log("-- Imprimindo currentAccount")
// console.log(Object.entries(currentAccountB))
// console.log("-- Adicionando a conta corrente na cliente account --")
// clientAccountB.addcurrentAccount(currentAccountB)
// console.log("-- Imprimindo ClientAccountB atualizada -- ")
// console.log(Object.entries(clientAccountB))
// console.log("--- Realizando Deposito ---")
// const depositForClientAccountB = new Deposit(clientAccountB,"2023-7-5",200)
// depositForClientAccountB.processDeposit("Conta corrente",723)
// console.log("-- Imprimindo ClientAccountB atualizada -- ")
// console.log(Object.entries(clientAccountB))
// console.log("-- Imprimindo currentAccountB atualizada -- ")
// console.log(Object.entries(currentAccountB))
// console.log("--- Fazendo Transferencia --- ")
// const transferFromAB = new Transfer(clientAccountA,clientAccountB,"2023-4-3",150)
// transferFromAB.processTransfer("Conta corrente",373,723)
// console.log("-- Imprimindo ClientAccountA atualizada -- ")
// console.log(Object.entries(clientAccountA))
// console.log("-- Imprimindo currentAccountB atualizada -- ")
// console.log(Object.entries(currentAccountB))
console.log(" -- Deletando conta poupanca A --");
bankManagerA.deactivatePoupancaAccount(clientAccountA, 347);
console.log("--- Imprimindo conta poupanca A atualizada --");
console.log(Object.entries(poupancaAccountA));
