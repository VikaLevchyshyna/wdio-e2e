
export async function hasItem(items, productName) {
    const array = Array.from(items);
    const names = await Promise.all(array.map(item => item.getText()));
    return names.includes(productName);
}


