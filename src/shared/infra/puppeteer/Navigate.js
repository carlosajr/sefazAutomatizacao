async function navigateTo(page, to) {
  await page.goto(to);
}

module.exports = {
  navigateTo
}