
export async function hasItem(items, productName) {
    const names = await Promise.all(items.map(item => item.getText()));
    return names.includes(productName);
}
