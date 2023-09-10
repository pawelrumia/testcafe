import {Selector} from 'testcafe';

const iFrameName = Selector("iframe#mce_0_ifr");
const textArea = Selector("body#tinymce.mce-content-body");

fixture("Iframe test")
.page("https://the-internet.herokuapp.com/iframe")

test("Iframe test", async t => {
    await t.switchToIframe(iFrameName)
    .click(textArea)
    .pressKey('ctrl+a delete')
    .typeText(textArea, 'lecimy tutaj')
    .expect(textArea.innerText).contains('tutaj');
})