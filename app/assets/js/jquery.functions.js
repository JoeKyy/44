$(function () {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxyvNek1YC1fU1WNkQFGV3-zeVpK1eYkI6mbBe48fQTF_fUJmyzCd_BaySuzmJSeqxV/exec'
	const form = document.forms['submit-to-google-sheet']
	const loading = document.querySelector('.js-loading')
	const successMessage = document.querySelector('.js-success-message')
	const errorMessage = document.querySelector('.js-error-message')

	form.addEventListener('submit', e => {
	e.preventDefault()
	showLoadingIndicator()
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => showSuccessMessage(response))
		.catch(error => showErrorMessage(error))
	})

	function showLoadingIndicator () {
		form.classList.add('is-hidden')
		loading.classList.remove('is-hidden')
	}

	function showSuccessMessage (response) {
		console.log('Success!', response)
		setTimeout(() => {
			successMessage.classList.remove('is-hidden')
			loading.classList.add('is-hidden')
		}, 500)
	}

	function showErrorMessage (error) {
		console.error('Error!', error.message)
		setTimeout(() => {
			errorMessage.classList.remove('is-hidden')
			loading.classList.add('is-hidden')
		}, 500)
	}

	$('input[type="tel"]').inputmask({"mask": "(99) 99999-9999"});
});