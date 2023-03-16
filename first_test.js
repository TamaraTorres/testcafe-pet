import { Selector } from 'testcafe';

fixture('Getting Started')
	.page('https://devexpress.github.io/testcafe/example/')
	.afterEach(async t => {
        await t.takeScreenshot({
			path:'screenshots/element_screenshot.png',
			fullPage: true,
		});
    });

test('My first test', async t => {
    await t
	.maximizeWindow()
	.setTestSpeed(0.1)
        .typeText('#developer-name', 'Tammy') //enter dev name
	.click('#remote-testing')//select remote testing checkbox
	.click('#linux') //select linux radio button
        .click('#submit-button') //click onsubmit
        .expect(Selector('#article-header').innerText).eql('Thank you, Tammy!');
});
test('Second Test- negative scenario', async t => {
    await t
	.maximizeWindow()
	.setTestSpeed(0.1)
	.click('#windows')//selecte windows radio button
		.expect(await Selector('#submit-button').hasAttribute('disabled')).ok();//check submit button is not enabled
});

test('Third Test', async t => {
    await t
	.maximizeWindow()
	.setTestSpeed(0.1)
	.typeText('#developer-name', 'Tammy') //enter dev name
	.click('#linux')//selecte linux radio button
	.click('#tried-test-cafe') //select tried test cafe checkbox
	.click('#slider')
    	.click('#submit-button')
        .expect(Selector('#article-header').innerText).eql('Thank you, Tammy!');
});
fixture.skip`Skipped Test`

test('Skipped Test', async t => {
    await t
	.maximizeWindow()
	.setTestSpeed(0.1)
	.typeText('#developer-name', 'Tammy') //enter dev name
	.click('#linux')//selecte linux radio button
	.click('#tried-test-cafe') //select tried test cafe checkbox
	.click('#slider')
    	.click('#submit-button')
        .expect(Selector('#article-header').innerText).eql('Thank you, Tammy!');
});

