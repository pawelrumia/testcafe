import { Selector } from 'testcafe';

const interfaceDropdown = Selector('#preferred-interface')
const interfaceOptions = interfaceDropdown.find('option')

fixture("Dropdown fixture")
    .page("https://devexpress.github.io/testcafe/example/");

    test.meta('env', 'prod')("test with metadata", async t => {
        await t.expect(interfaceDropdown.exists).ok()
    })

    test.meta('env', 'prod')("dropdown choose test", async t => {
        await t.click(interfaceDropdown)
        .click(interfaceOptions.withText('JavaScript API'))
    })

    