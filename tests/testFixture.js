import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

const nameInput = Selector("#developer-name")
const submitButton = Selector("#submit-button")
const pageGoodbyeText = Selector("#article-header")
const populateButton = Selector("#populate")
const triedCafeButton = Selector("#tried-test-cafe")
const pageHeader = Selector("header")
const macosLabel = Selector("#macos")
const getPageUrl = ClientFunction(() => window.location.href)

fixture("My Fixture")
    .page("https://devexpress.github.io/testcafe/example/")
    .beforeEach(async t => {
        await t.maximizeWindow().setPageLoadTimeout(0);
    });

    test("My first test", async (t) => {
        await t.typeText(nameInput, 'Jasio')
        .typeText(nameInput, 'Paker', { replace: true })
        .typeText(nameInput, 'r', { caretPos: 2 })
        .expect(nameInput.value).contains('Parker');
    });

    test("Klikacz", async t => {
        await t.typeText(nameInput, "Jahn Wick")
        .click(submitButton)
        .expect(pageGoodbyeText.innerText).eql('Thank you, Jahn Wick!');
    })

    test('Sprawdzenie buttona', async t => {
        await t.expect(populateButton.count).eql(1)
        .expect(populateButton.exists).ok()
    })

    test('Drag test cafe slider', async t => {
        await t.click(triedCafeButton)
        .drag("#slider", 200, 0, {offsetX: 10, offsetY: 10})
    })

    test("Test controller", async t => {
        await t.setNativeDialogHandler(() => true)
        .click(populateButton)
        .click(submitButton)
        
        const location = await t.eval(() => window.location);

        await t.expect(location.pathname).eql('/testcafe/example/thank-you.html');
    })

    test("button exists", async t => {
        await t.expect(populateButton.textContent).contains("Popu").takeScreenshot
    })

    test("page header", async t => {
        await t.expect(pageHeader.innerText).contains("TestCafe").takeScreenshot()
    })

    test("e2e", async t => {
        await t.typeText(nameInput, "Pawelo")
        .click(macosLabel)
        .click(triedCafeButton)
        .click(submitButton)
        .expect(pageGoodbyeText.innerText).eql('Thank you, Pawelo!');
    })

    test("client function", async t => {
        await t.typeText(nameInput, "Pawelo")
        .click(macosLabel)
        .click(triedCafeButton)
        .click(submitButton)
        .expect(getPageUrl()).contains('thank-you.');
    })

    test("client function with visibility czek", async t => {
        const nameInputElement = nameInput.with({visibilityCheck:true})
        await t.typeText(nameInputElement, "Pawelo")
        .click(macosLabel)
        .click(triedCafeButton)
        .click(submitButton)
        .expect(getPageUrl()).contains('thank-you.');
    })
    