/// thể loại
var gtheLoai={
    namPhatHanh:"",
    nhaSanXuat:"",
    khuyenMai:"",
    giaTien:"",
    tenMonHang:""
}

$("#btn-mini").on("click", function(){
    // alert("Da chon san pham 1")
    $("#btn-mini").removeClass("btn-primary").addClass("btn-warning")
    $("#btn-track").removeClass("btn-warning").addClass("btn-primary")
    $("#btn-solo").removeClass("btn-warning").addClass("btn-primary")
    gtheLoai.namPhatHanh="2020";
    gtheLoai.nhaSanXuat="Bighit";
    gtheLoai.khuyenMai="25%";
    gtheLoai.giaTien="2.000.000vnd";
    gtheLoai.tenMonHang="Minialbum";
    console.log(gtheLoai)
})
$("#btn-track").on("click", function(){
    // alert("Da chon san pham 2")
    $("#btn-track").removeClass("btn-primary").addClass("btn-warning")
    $("#btn-mini").removeClass("btn-warning").addClass("btn-primary")
    $("#btn-solo").removeClass("btn-warning").addClass("btn-primary")
    gtheLoai.namPhatHanh="2019";
    gtheLoai.nhaSanXuat="Bighit";
    gtheLoai.khuyenMai="10%";
    gtheLoai.giaTien="1.500.000vnd";
    gtheLoai.tenMonHang="Track album";
    console.log(gtheLoai)
})
$("#btn-solo").on("click", function(){
    // alert("Da chon san pham 3")
    $("#btn-solo").removeClass("btn-primary").addClass("btn-warning")
    $("#btn-track").removeClass("btn-warning").addClass("btn-primary")
    $("#btn-mini").removeClass("btn-warning").addClass("btn-primary")
    gtheLoai.namPhatHanh="2021";
    gtheLoai.nhaSanXuat="Label";
    gtheLoai.khuyenMai="15%";
    gtheLoai.giaTien="3.000.000vnd";
    gtheLoai.tenMonHang="Album solo"
    console.log(gtheLoai)
})


// card
var object= {
  hoTen:"",
  email:"",
  soDienThoai:"",
  diaChi:"",
  tenMonHang:"",
  giaTien:"",
  loiNhan:""
}

    $("#btn-1").on("click", function(){
        // alert("Da chon san pham 1")
        $("#btn-1").removeClass("btn-primary").addClass("btn-warning")
        $("#btn-2").removeClass("btn-warning").addClass("btn-primary")
        $("#btn-3").removeClass("btn-warning").addClass("btn-primary")
        object.tenMonHang="Jeon Jungkook";
        object.giaTien="300.000vnd";
        console.log(object)
    })
    $("#btn-2").on("click", function(){
        // alert("Da chon san pham 2")
        $("#btn-2").removeClass("btn-primary").addClass("btn-warning")
        $("#btn-1").removeClass("btn-warning").addClass("btn-primary")
        $("#btn-3").removeClass("btn-warning").addClass("btn-primary")
        object.tenMonHang="Park Jimin";
        object.giaTien="400.000vnd";
        console.log(object)
    })
    $("#btn-3").on("click", function(){
        // alert("Da chon san pham 3")
        $("#btn-3").removeClass("btn-primary").addClass("btn-warning")
        $("#btn-1").removeClass("btn-warning").addClass("btn-primary")
        $("#btn-2").removeClass("btn-warning").addClass("btn-primary")
        object.tenMonHang="Kim Namjoon";
        object.giaTien="350.000vnd";
        console.log(object)
    })

    /// xac  nhanh thanh toan
    $("#btn-send").on("click", function(){
        object.hoTen="Pham Van Hai";
        object.email="hai@gmail.com";
        object.soDienThoai="0837475784";
        object.diaChi="12 Hai Ba Trung";
        object.loiNhan="giao gio hanh chinh";
        console.log(object);
        alert("Đặt hàng thành công")
    })

