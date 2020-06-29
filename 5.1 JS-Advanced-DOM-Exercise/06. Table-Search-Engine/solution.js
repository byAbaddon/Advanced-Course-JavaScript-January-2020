function solve() {
   let $search = $('#searchField')

   $('#searchBtn').on('click', function () {

      $('tbody tr').removeClass('select')

      let searchingText = $search.val()
      let isMatch = $('tbody tr td:contains("' + searchingText + '")')
      if (isMatch.length > 0 && $search.val() !== '') {
         $('tbody tr td:contains("' + searchingText + '")').each(function () {
            $(this).closest('tr').addClass('select')
         });
      }
      $search.val('')
   })

}