const puppeteer = require('puppeteer');
const prompt = require("prompt-sync")({ sigint: true });


//  Change your name and class here
let fullName = "CHAI JUAN ZHE"
let currentClass = "4 BAIDURI"




//  --------------------------------------------------------------------------------------------------------------

let subject = prompt("What is your current subject? ");

subject = subject.toUpperCase()
fullName = fullName.toUpperCase()
currentClass = currentClass.toUpperCase()

if(subject === "BAHASA MELAYU" ||  subject === "BAHASA CINA" || subject === "BAHASA INGGERIS" || subject === "BIOLOGI" || subject === "FIZIK" || subject === "KIMIA" || subject === "BAHASA JEPUN" || subject === "BAHASA TAMIL" || subject === "KESUSASTERAAN BAHASA TAMIL"  || subject === "MATEMATIK"  || subject === "MATEMATIK TAMBAHAN"  || subject === "PENDIDIKAN JASMANI & KESIHATAN"  || subject === "PENDIDIKAN MORAL" || subject === "PRINSIP PERAKAUNAN"  || subject === "SAINS"  || subject === "SAINS KOMPUTER"  || subject === "SEJARAH" ){

    fill(subject, fullName, currentClass, true)

    async function fill(subject, fullName, currentClass, submitForm) {

        try {
        const browser  = await puppeteer.launch({ headless: true, args: ['--no-sandbox'],});
        const page = await browser.newPage();
        await page.goto("https://docs.google.com/forms/d/e/1FAIpQLSeRpuWL1hTLilGH2E5Bz39BuQcZ9qCTHBBauwfmVFkWsok0QA/viewform", {waitUntil: 'networkidle2'})
        const title = await page.$eval("title", el => el.textContent);

        console.log("")
        console.log(`Page Title: ${title}`);
        console.log("")

        const today = new Date();
        const month = today.getMonth() + 1;
        const date = today.getDate();
        const year = today.getFullYear();
        console.log(`Today's date: ${date}/${month}/${year}`);
        console.log("");
        const time = `${month}${date}${year}`
        await page.focus('.quantumWizTextinputPaperinputInput.exportInput');
        await page.keyboard.type(time);
        await page.waitForTimeout(200);
        await page.click('.appsMaterialWizButtonPaperbuttonContent.exportButtonContent');
        console.log(`Date: ${time}`);
        await page.waitForNavigation();

        console.log("");
        console.log("----------------------------------------------");
        console.log("");

        await page.waitForTimeout(400);
        await page.click('.quantumWizMenuPaperselectOption.appsMaterialWizMenuPaperselectOption.freebirdThemedSelectOptionDarkerDisabled.exportOption.isSelected.isPlaceholder');
        await page.waitForTimeout(500);
        await page.click('.exportSelectPopup.quantumWizMenuPaperselectPopup.appsMaterialWizMenuPaperselectPopup>.quantumWizMenuPaperselectOption.appsMaterialWizMenuPaperselectOption.freebirdThemedSelectOptionDarkerDisabled.exportOption[data-value="'+ subject.toUpperCase() +'"]');
        console.log(`Subject : ${subject}`)
        await page.waitForTimeout(600);
        await page.click('.quantumWizMenuPaperselectOption.appsMaterialWizMenuPaperselectOption.freebirdThemedSelectOptionDarkerDisabled.exportOption.isSelected.isPlaceholder');
        await page.waitForTimeout(400);
        await page.click('.exportSelectPopup.quantumWizMenuPaperselectPopup.appsMaterialWizMenuPaperselectPopup>.quantumWizMenuPaperselectOption.appsMaterialWizMenuPaperselectOption.freebirdThemedSelectOptionDarkerDisabled.exportOption[data-value="TINGKATAN 4"]');
        console.log(`Form : TINGKATAN 4`)
        await page.waitForTimeout(600);
        const selector = await page.$$('.appsMaterialWizButtonPaperbuttonFocusOverlay.exportOverlay');
        await selector[1].click();

        console.log("");
        console.log("----------------------------------------------");
        console.log("");

        await page.waitForNavigation();
        await page.click('.quantumWizMenuPaperselectOption.appsMaterialWizMenuPaperselectOption.freebirdThemedSelectOptionDarkerDisabled.exportOption.isSelected.isPlaceholder');
        await page.waitForTimeout(400);
        await page.click('.exportSelectPopup.quantumWizMenuPaperselectPopup.appsMaterialWizMenuPaperselectPopup>.quantumWizMenuPaperselectOption.appsMaterialWizMenuPaperselectOption.freebirdThemedSelectOptionDarkerDisabled.exportOption[data-value="'+ currentClass.toUpperCase() +'"]');
        await page.waitForTimeout(500);
        console.log(`Class : ${currentClass}`);
        const selector2 = await page.$$('.appsMaterialWizButtonPaperbuttonFocusOverlay.exportOverlay');
        await selector2[1].click();

        console.log("");
        console.log("----------------------------------------------");
        console.log("");

        await page.waitForNavigation();
        await page.click('.quantumWizMenuPaperselectOption.appsMaterialWizMenuPaperselectOption.freebirdThemedSelectOptionDarkerDisabled.exportOption.isSelected.isPlaceholder');
        await page.waitForTimeout(400);
        await page.click('.exportSelectPopup.quantumWizMenuPaperselectPopup.appsMaterialWizMenuPaperselectPopup>.quantumWizMenuPaperselectOption.appsMaterialWizMenuPaperselectOption.freebirdThemedSelectOptionDarkerDisabled.exportOption[data-value="'+ fullName +'"]');
        await page.waitForTimeout(500);
        console.log(`Name : ${fullName}`);
        console.log("");
        console.log("----------------------------------------------");



        if(submitForm){
            const selector3 = await page.$$('.appsMaterialWizButtonPaperbuttonFocusOverlay');
            await selector3[1].click();
            await page.waitForNavigation();
            const submissionPage = await page.url();
            console.log(submissionPage);
            if (submissionPage.includes("formResponse")) {
                console.log("");
                console.log("Form Submitted Successfully");
                console.log("");
            }
        }
         await page.close();
         await browser.close();

        } catch (error) {
            console.error(error.message);
        }
    }
}else {
    console.error(`Opps! your subject: ${subject}is not a valid subject`);
}
