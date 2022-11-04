//window popup script
function winPop(url) {
    window.open(url, "popup", "width=300,height=300,left=10,top=10,resizable=no,scrollbars=no");
}
/**
 * document.location.href split
 * return array Param
 */
function getQueryString(sKey)
{
    var sQueryString = document.location.search.substring(1);
    var aParam       = {};

    if (sQueryString) {
        var aFields = sQueryString.split("&");
        var aField  = [];
        for (var i=0; i<aFields.length; i++) {
            aField = aFields[i].split('=');
            aParam[aField[0]] = aField[1];
        }
    }

    aParam.page = aParam.page ? aParam.page : 1;
    return sKey ? aParam[sKey] : aParam;
};

$(document).ready(function(){
    // tab
    $.eTab = function(ul){
        $(ul).find('a').click(function(){
            var _li = $(this).parent('li').addClass('selected').siblings().removeClass('selected'),
                _target = $(this).attr('href'),
                _siblings = '.' + $(_target).attr('class');
            $(_target).show().siblings(_siblings).hide();
            return false
        });
    }
    if ( window.call_eTab ) {
        call_eTab();
    };
});


// 제품후기, 문의하기 링크 바꾸기
$('.xans-layout-boardinfo ul li:nth-child(6) a').attr('href','/board/product/list.html?board_no=6');

// 강조 공지사항 텍스트 컬러
$('.xans-board-listpackage .subject a').css('color','#000');
$('.board_product_span').css('color','#000');

// 자주 묻는 질문 css 변환
if (window.location.href.indexOf('board_no=3') > -1) {
    $('.xans-board-listpackage tr .subject .notice_icon2').addClass('active')
    $('.xans-board-listpackage .ec-base-table tr th:nth-last-child(-n+5)').addClass('active');
    $('.xans-board-listpackage .ec-base-table tr td:nth-last-child(-n+5)').addClass('active');
    $('.xans-board-listpackage .ec-base-table td').addClass('active');
    $('.xans-board-listpackage .ec-base-table tr th:nth-child(3)').addClass('active');
    $('.xans-board-listpackage .ec-base-table.typeList .center td.left').addClass('active');
    
    // 자주 묻는 질문 내용 나타내기
    $('.xans-board-listpackage .ec-base-table .subject').click(function(){
        $('.xans-board-listpackage .ec-base-table .subject a').attr('href','javascript:void(0);');
        $(this).children('.xans-board-listpackage .ec-base-table .subject .detail').slideToggle('active');
    });
}

// 4
if (window.location.href.indexOf('board_no=4') > -1) {
    $('.xans-board-listpackage .ec-base-table .subject a').css({'margin-left' : '-9px','font-weight' : 'var(--font-weight)'});
}
if (window.location.href.indexOf('4') > -1) {
    $('.xans-board-listpackage .ec-base-table .subject a').css({'margin-left' : '-9px','font-weight' : 'var(--font-weight)'});
}

// 6
if (window.location.href.indexOf('board_no=6') > -1) {
    $('.xans-board-listpackage img.board_product_img').addClass('active');
    $('.xans-board-listpackage .board_product_span').addClass('active');
}
if (window.location.href.indexOf('6') > -1) {
    $('.xans-board-listpackage img.board_product_img').addClass('active');
    $('.xans-board-listpackage .board_product_span').addClass('active');
}

// 문의하기 , 업무제휴 css 변환
for (i=5; i<=6; i++) {
    if (window.location.href.indexOf('board_no=') > -1) {
        $('.xans-board-listpackage .ec-base-table .subject a').addClass('active');
        $('.xans-board-listpackage tr .subject .notice_icon2').addClass('active');
    }
}

// 문의하기 , 업무제휴 비밀번호 페이지에서 '목록' 눌렀을때 페이지 css 변환
for (i=5; i<=6; i++) {
    if (window.location.href.indexOf('') > -1) {
        $('.xans-board-listpackage .ec-base-table .subject a').addClass('active');
        $('.xans-board-listpackage tr .subject .notice_icon2').addClass('active');
    }
}

// 해당 위치 표시 텍스트 컬러
$(function() {
    let category_item = $('.xans-layout-boardinfo ul li:nth-child(n+3) a')
    let itemLength = category_item.length;
    let thisBoardNo = $('#board_no').val();
    let activeIndex;
    for(let i=0; i<itemLength; i++) {
        if(category_item[i].href.split('board_no=')[1]===thisBoardNo) {
            activeIndex = i;
        }
    }
    $('.xans-layout-boardinfo ul li:nth-child(n+3)').eq(activeIndex).addClass('active');
});

// 관리자 글이동,글복사 옆 텍스트 지우기
$('.xans-board-function a:last-child').each(function(){
    $($(this)[0].nextSibling).remove();
});