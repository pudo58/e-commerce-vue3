<script lang="tsx">
import HeaderComponent from "@/components/header/Header.vue";
import FooterComponent from "@/components/footer/Footer.vue";
import {defineComponent, ref, watch} from "vue";
import {ProductModel} from "@/base/model/ProductModel";
import {PRODUCT_RESPONSIVE_CLASS} from "@/plugins/utils";
import ProductComponent from "@/components/product/ProductComponent.vue";
import PageComponent from "@/components/pages/PageComponent.vue";
import LoadingComponent from "@/components/loading/LoadingComponent.vue";
import LoadingButtonComponent from "@/components/button/LoadingButtonComponent.vue";

export default defineComponent({
	name: 'ProductPage',
	components: {
		HeaderComponent,
		FooterComponent,
		ProductComponent,
		PageComponent,
		LoadingComponent
	},
	setup() {
		const products = ref([
			{
				name: 'Product 1',
				price: 100,
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
				imageThumbnail: 'src/assets/images/product_01.jpg',
				rating: 1,
				totalReviews: 12,
			},
			{
				name: 'Product 1',
				price: 100,
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
				imageThumbnail: 'src/assets/images/product_01.jpg',
				rating: 4,
				totalReviews: 12,
			},
			{
				name: 'Product 1',
				price: 100,
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
				imageThumbnail: 'src/assets/images/product_01.jpg',
				rating: 5,
				totalReviews: 12,
			},
			{
				name: 'Product 1',
				price: 100,
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
				imageThumbnail: 'src/assets/images/product_01.jpg',
				rating: 3,
				totalReviews: 12,
			},
			{
				name: 'Product 1',
				price: 100,
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
				imageThumbnail: 'src/assets/images/product_01.jpg',
				rating: 4,
				totalReviews: 12,
			},
			{
				name: 'Product 1',
				price: 100,
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
				imageThumbnail: 'src/assets/images/product_01.jpg',
				rating: 4,
				totalReviews: 12,
			}] as ProductModel[]);
		const headerImage = (
			<div class="page-heading products-heading header-text">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="text-content">
								<h4>new arrivals</h4>
								<h2>sixteen products</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
		const loadingComponent = <LoadingComponent loading={true}/>
		return () => (
			<div>
				{loadingComponent}
				<header-component/>
				{headerImage}
				<div class="products">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<div class="filters">
									<ul>
										<li class="active" data-filter="*">All Products</li>
										<li data-filter=".des">Featured</li>
										<li data-filter=".dev">Flash Deals</li>
										<li data-filter=".gra">Last Minute</li>
									</ul>
								</div>
							</div>
							<div class="col-md-12">
								<div class="filters-content">
									<div class="row grid">
										{products.value?.map((item) => (
											<product-component className={PRODUCT_RESPONSIVE_CLASS.three} key={item.name} product={item}/>
										))}
									</div>
								</div>
							</div>
							<div class="col-md-12">
								<page-component page={0} total-page={10} page-change={() => void(0)}/>
							</div>
						</div>
					</div>
				</div>
				<FooterComponent/>
			</div>
		)
	}
})
</script>

<style scoped lang="css">
.products {
	margin-top: 100px;
}

.filters {
	text-align: center;
	border-bottom: 1px solid #eee;
	padding-bottom: 10px;
	margin-bottom: 60px;
}

.filters li {
	text-transform: uppercase;
	font-size: 13px;
	font-weight: 700;
	color: #121212;
	display: inline-block;
	margin: 0px 10px;
	transition: all .3s;
	cursor: pointer;
}
</style>