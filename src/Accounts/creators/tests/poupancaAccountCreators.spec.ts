import currentAccount from "../currentAccount.model";
import poupancaAccount from "../poupancaAccount.model";

jest.mock('uuid', () => ({
    v4: jest.fn(),
  }));


describe("poupancaAccount products tests",()=>{
    test("should make a transfer from poupancaAccount to currentAccount", () =>{
        const accountA: poupancaAccount  = new poupancaAccount(100,"2023-12-12")
        const accountB: currentAccount  = new currentAccount(150,"2023-12-10")
        accountA.processTransfer(20,accountB)
        expect(accountA).toHaveProperty("_amount",80)
        expect(accountB).toHaveProperty("_amount",170)        
    })
    test("should make a transfer from poupancaAccount to popuancaAccount", () =>{
        const accountA: poupancaAccount  = new poupancaAccount(450,"2023-10-10")
        const accountB: poupancaAccount  = new poupancaAccount(160,"2006-8-10")
        accountA.processTransfer(20,accountB)
        expect(accountA).toHaveProperty("_amount",430)
        expect(accountB).toHaveProperty("_amount",180)        
    })
    test("should make a deposit", () => {
        const accountA: poupancaAccount  = new poupancaAccount(120,"2021-12-12")
        accountA.processDeposit(10)
        expect(accountA).toHaveProperty("_amount",130)
    })
    test("should make a withdrawn ", () => {
        const accountA: poupancaAccount  = new poupancaAccount(100,"2022-9-12")
        accountA.processWithdrawn(20)
        expect(accountA).toHaveProperty("_amount",80)
    })
    test("should deactivate a account", () => {
        const accountA: poupancaAccount  = new poupancaAccount(110,"2022-10-12")
        accountA.processDeactivate()
        expect(accountA).toHaveProperty("_isActive",false)
    })
    test("should update rendimento", () => {
        const accountA: poupancaAccount  = new poupancaAccount(110,"2022-10-12")
        accountA.updateRendimento(true,0.25)
        expect(accountA).toHaveProperty("_rendimento",0.25)
    })
    test.failing("should not update rendimento", () => {
        const accountA: poupancaAccount  = new poupancaAccount(110,"2022-10-12")
        accountA.updateRendimento(false,0.25)
        expect(accountA).toHaveProperty("_rendimento",200)
    })
})