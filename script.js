function toggleSettings() {
    const settingsPanel = document.getElementById('settingsPanel');
    settingsPanel.classList.toggle('hidden');
}

function convertToFormatted() {
    // Get the input value
    const input = document.getElementById('input').value;

    // Get the selected delimiter
    const delimiter = document.getElementById('delimiter').value;

    // Get the start and end tags
    const tagStart = document.getElementById('tagStart').value;
    const tagEnd = document.getElementById('tagEnd').value;

    // Check if whitespace trimming is enabled
    const trimWhitespace = document.getElementById('trimWhitespace').checked;

    // Split the input value by new lines
    let lines = input.split('\n');

    if (trimWhitespace) {
        // Trim whitespace and filter out empty lines if checkbox is checked
        lines = lines.map(line => line.trim()).filter(line => line.length > 0);
    }

    // Wrap each line with the selected tags
    const wrappedLines = lines.map(line => `${tagStart}${line}${tagEnd}`);

    // Join the wrapped lines with the selected delimiter
    const result = wrappedLines.join(delimiter);

    // Display the result in the output textarea
    document.getElementById('output').value = result;
}
