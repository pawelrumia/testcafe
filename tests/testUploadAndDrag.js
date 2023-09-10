import {Selector} from 'testcafe';

const fileUpload = Selector("input#file-upload");
const uploadButton = Selector("input#file-submit");
const uploadedFiles = Selector("div#uploaded-files");
const triedCafeButton = Selector("#tried-test-cafe")
const slider = Selector("#slider")

fixture("Upload test")
.page("https://the-internet.herokuapp.com/upload")

test("Upload test", async t => {
    await t.setFilesToUpload(fileUpload, '../../cv/podpis.pdf')
    .click(uploadButton)
    .expect(uploadedFiles.innerText).contains('podpis');
})

test("Upload test z debugiem", async t => {
    await t.setFilesToUpload(fileUpload, '../../cv/podpis.pdf')
    .clearUpload(fileUpload)
    .setFilesToUpload(fileUpload, '../../cv/podpis.pdf')
    .takeElementScreenshot(uploadButton)
    .click(uploadButton)
    .expect(uploadedFiles.innerText).contains('podpis')
    .takeScreenshot();
})

test.page('https://devexpress.github.io/testcafe/example/')("Drag test", async t => {
    await t.setTestSpeed(0.5).click(triedCafeButton)
    .drag(slider, 250, 0, {offsetX:10, offsetY:10});
})