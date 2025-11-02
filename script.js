const link = document.createElement('a');
link.href = 'Download/teste.txt';
link.download = 'teste.txt';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);

const link = document.createElement('a');
link.href = 'Download/teste2.txt';
link.download = 'teste.txt';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
