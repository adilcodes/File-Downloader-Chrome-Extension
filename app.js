const urlInput = document.querySelector("input"),
  downloadBtn = document.querySelector("button"),
  failedMsg = document.getElementById("failedMsg");

function fetchFile(inputtedUrl) {
  fetch(inputtedUrl)
    .then(response => response.blob())
    .then((file) => {
        let tempURL = URL.createObjectURL(file);
        let newAnchorTag = document.createElement("a");
        newAnchorTag.href = tempURL;
        newAnchorTag.download = `file${Date.now()}`;
        newAnchorTag.click();
        newAnchorTag.remove();
        URL.revokeObjectURL(tempURL);
        downloadBtn.innerText = "Download File";
        failedMsg.innerText = ""
    }).catch(() => {
        downloadBtn.innerText = "Download File";
        failedMsg.innerText = "Failed to download file!!!"
    })
}

downloadBtn.addEventListener("click", (e) => {
  e.preventDefault();
  downloadBtn.innerText = "Downloading File..."
  fetchFile(urlInput.value);
});
