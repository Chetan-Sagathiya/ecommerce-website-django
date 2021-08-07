$('.add-to-cart').click(function(){
	var productId = this.dataset.product
	var action = this.dataset.action
	console.log('productId:', productId)
	$.ajax(
	{
		type:"GET",
		url: "/add_to_cart",
		data:{
			productId: productId,
			action: action,
			},
			success: function(data){
				var qty = parseInt($('sup').text())
				$('sup').val(qty+1)
				location.reload()
			}
	})
})

$('.decrease-item').click(function(){
	var productId = this.dataset.product
	var action = this.dataset.action
	var qty = $('.qty').val();
	$.ajax(
	{
		type:"GET",
		url: "/add_to_cart",
		data:{
			productId: productId,
			action: action,
			},
			success: function(data){
				var qty = parseInt($('sup').text())
				$('sup').val(qty-1)
				location.reload()
				console.log("this is done here",qty)					
			}
	})
})

$('.increase-item').click(function(){
	var productId = this.dataset.product
	var action = this.dataset.action
	console.log("item decresed", productId, action)
	var qty = $('.qty').val();
	console.log("qty is ",qty)
	$.ajax(
	{
		type:"GET",
		url: "/add_to_cart",
		data:{
			productId: productId,
			action: action,
			},
			success: function(data){
				location.reload()
			}
	})
})