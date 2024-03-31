

function copyToClipboard(message) {
    navigator.clipboard.writeText(message).then(
        () => { },
        () => {
            alert("Couldn't copy text to clipboard!");
        }
    );
}

function handleCopyToClipboardClick() {
    toCopy = document.getElementById('output').innerHTML;
    copyToClipboard(toCopy);
}

function handleConvertClick() {
    var lines = input.value;
    lines = lines.split("\n");

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];

        line = line.split(" ");
        line = line.filter(e => e);
        console.log(line);
        line = line.join("\t");
        console.log(line);
        lines[i] = line;
    }
    lines = lines.join("\n");
    output.value = lines;

}

const input = document.getElementById("input");
const output = document.getElementById("output");
const copy_to_clipboard_button = document.getElementById("copy_to_clipboard_button");

//convert.addEventListener('click', handleConvertClick);
copy_to_clipboard_button.addEventListener('click', handleCopyToClipboardClick);

$("#copy_to_clipboard_button").click(function () {
    $('#circle').animate(
        { width: "100%"}, 400, function () {
            $('#circle').animate(
                { opacity: "0" }, 300, function () {
                    circle.style.opacity = "100%";
                    circle.style.width = "0";
                }
            )
        }
    )
});
