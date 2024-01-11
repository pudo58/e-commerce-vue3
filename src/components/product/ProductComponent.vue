<script lang="tsx">
import {defineComponent, ref} from "vue";
import {ProductModel} from "@/base/model/product.model";
import RatingComponent from "@/components/rating/RatingComponent.vue";
import formatMoney from "@/plugins/utils";

export default defineComponent({
	name: 'ProductComponent',
	components: {
		RatingComponent
	},
	props: {
		product: {
			type: ProductModel,
			default: () => new ProductModel(),
			required: true
		}
	},
	setup(props, {emit}) {
		const product = ref(props.product);
        const addToCart = () => {
            alert('add to cart');
            emit('add-to-cart', product.value);
        }
		return () => (
			<div>
				<div class="product-card border-1 mb-7">
					<div role="button" title={product.value?.name} class="product-image" style={{"background-image": 'url(' + product.value?.imageThumbnail + ')'}}></div>
					<div class="product-info">
						<div class="product-title">{product.value?.name}</div>
						<div class="product-price">{formatMoney(product.value?.price)}</div>
						<div class="product-description limit-line-2">{product.value?.description}</div>
						<div class="product-rating d-flex">
							<div>
                                <rating-component rating={product.value?.rating}/>
                                <span class="total-reviews">({product.value?.totalReviews} reviews)</span>
                            </div>
                            <div class="ml-auto">
                                <v-btn onClick={addToCart} title="add to cart" density="default" icon="mdi-cart-plus"></v-btn>
                            </div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
