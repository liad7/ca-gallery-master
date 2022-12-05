'use strict'

const MY_MAIL = 'liadgola7@gmail.com'

$(document).ready(init)

function init() {
    console.log('Starting up')
    renderProtfolios()
    setProtfoliosClick()
    setSubmitMailClick()
}

function renderProtfolios() {
    const projs = getProjs()
    var strHTMLs = projs.map(proj => {
        const { id, name, title } = proj

        return `<div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link ${id}" data-toggle="modal" href="#portfolioModal">
                        <div class="portfolio-hover bg-danger">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/${id}.png" alt="">
                    </a>
                    <div class="portfolio-caption bg-secondary">
                        <h4 class="text-light">${name}</h4>
                        <p class="text-warning">${title}</p>
                    </div>
                </div>`
    })
    console.log(strHTMLs)
    $('.port-content').html(strHTMLs)

}

function setProtfoliosClick() {
    const projs = getProjs()
    projs.forEach(proj => {
        $(`.${proj.id}`).click(function () { setModalDitails(proj.id) })
    })

}

function setModalDitails(projId) {
    const proj = getProjById(projId)
    const { id, name, title, desc, publishedAt, labels, url } = proj

    $('.modal-body .img-fluid').attr('src', `img/portfolio/${id}.png`)
    $('.modal-body h2').text(name)
    $('.modal-body .title').text(title)
    $('.modal-body .desc').text(desc)
    $('.modal-body a').attr('href', url)
    $('.modal-body .date').text(getDispalyDate(publishedAt))

    const label = labels.join(',') ? labels.join(',') : 'none'
    $('.modal-body .category').text(label)
}

function setSubmitMailClick(){
    $('.contact').on('submit',onOpanMailTab)
}

function onOpanMailTab(){
    // const mail = $('.contact .e-mail').val()
    const sub = $('.contact .subject').val()
    const content = $('.contact textarea').val()

    const queryStringParams = `https://mail.google.com/mail/?view=cm&fs=1&to=${MY_MAIL}&su=${sub}&body=${content}`
    window.open(queryStringParams, '_blank')
    $('.contact .e-mail').val('')
    $('.contact .subject').val('')
    $('.contact textarea').val('')
}



