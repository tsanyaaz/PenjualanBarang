let peringatan = [];

function Diskon(){
    subTotal = harga*jumlah
    
    if (subTotal >= 250000){
        diskon = "25%"
        nilai = subTotal * 25 / 100
    } else if (subTotal >= 200000 && subTotal < 250000){
        diskon = "20%"
        nilai = subTotal * 20 / 100
    } else if (subTotal >= 150000 && subTotal < 200000){
        diskon = "15%"
        nilai = subTotal * 15 / 100
    } else if (subTotal >= 100000 && subTotal < 150000){
        diskon = "10%"
        nilai = subTotal * 10 / 100
    } else if (subTotal >= 50000 && subTotal < 100000){
        diskon = "5%"
        nilai = subTotal * 5 / 100
    } else {
        diskon = null
        nilai = 0
    }
    
    total = subTotal - (nilai);

}

function pesan(kode,namaBarang,harga,jumlah){
    if (kode == "" || !kode)
    peringatan.push("Kode Barang Harus Diisi!")
    if (namaBarang == "" || !namaBarang)
    peringatan.push("Nama Barang Harus Diisi!")
    if (harga == "0" || !harga)
    peringatan.push("Harga Tidak Boleh Nol!")
    if (jumlah == "0" || !jumlah)
    peringatan.push("Jumlah Tidak Boleh Nol!")
}

function isi() {
    kode = document.getElementById("kode").value;
	namaBarang = document.getElementById("namaBarang").value;
    harga = document.getElementById("harga").value;
    jumlah = document.getElementById("jumlah").value;  
    
    pesan(kode,namaBarang,harga,jumlah)

    if (peringatan.length < 1){
        Diskon() 
        document.getElementById("subTotal").value = "Rp." + subTotal + ",-";
        document.getElementById("diskon").value = diskon;
        document.getElementById("nilai").value = "Rp." + nilai + ",-";
        document.getElementById("total").value = "Rp." + total + ",-";
        return Diskon()
    } else {
        alert(peringatan.join("\n"))
        peringatan = []
    }
}
