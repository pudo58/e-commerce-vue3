<script lang="tsx">
import {defineComponent, ref, watch} from "vue";

export default defineComponent({
	name: 'HeaderComponent',
	props: {
		showHeader: {
			type: Boolean,
			default: true,
		},
	},
	setup(props) {
		const isShow = ref(props.showHeader);
		const scrollHandler = () => {
			let scroll = window.scrollY || document.documentElement.scrollTop;
			let header = document.querySelector('header')?.offsetHeight || 0;

			if (scroll >= header) {
				document.querySelector('header')?.classList.add('background-header');
			} else {
				document.querySelector('header')?.classList.remove('background-header');
			}
		};

		// Thêm sự kiện scroll khi component được tạo
		window.addEventListener('scroll', scrollHandler);

		watch(isShow, (value) => {
			console.log('isShow changed:', value);
			if (value) {
				// Thêm sự kiện scroll khi isShow là true
				window.addEventListener('scroll', scrollHandler);
			} else {
				// Xóa sự kiện scroll khi isShow là false
				window.removeEventListener('scroll', scrollHandler);
			}
		});
		return () => (
			<div>
				{isShow.value && (
					<header class="">
						<nav class="navbar navbar-expand-lg">
							<div class="container">
								<a class="navbar-brand" href="index.html"><h2>Template <em>Clothing</em></h2></a>
								<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
									<span class="navbar-toggler-icon"></span>
								</button>
								<div class="collapse navbar-collapse" id="navbarResponsive">
									<ul class="navbar-nav ml-auto">
										<li class="nav-item active">
											<a class="nav-link" href="index.html">Home
												<span class="sr-only">(current)</span>
											</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="products.html">Our Products</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="about.html">About Us</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="contact.html">Contact Us</a>
										</li>
									</ul>
								</div>
							</div>
						</nav>
					</header>
				)}
			</div>
		)

	}
});
</script>

<style lang="css">
header .navbar {
	padding: 17px 0px;
}

.background-header .navbar {
	padding: 17px 0px;
}

.background-header {
	top: 0;
	position: fixed;
	background-color: #fff !important;
	box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
}

.background-header .navbar-brand h2 {
	color: #121212 !important;
}

.background-header .navbar-nav a.nav-link {
	color: #1e1e1e !important;
}

.background-header .navbar-nav .nav-link:hover,
.background-header .navbar-nav .active > .nav-link,
.background-header .navbar-nav .nav-link.active,
.background-header .navbar-nav .nav-link.show,
.background-header .navbar-nav .show > .nav-link {
	color: #f33f3f !important;
}

.navbar .navbar-brand {
	float: left;
	margin-top: -12px;
	outline: none;
}

.navbar .navbar-brand h2 {
	color: #fff;
	text-transform: uppercase;
	font-size: 24px;
	font-weight: 700;
	-webkit-transition: all .3s ease 0s;
	-moz-transition: all .3s ease 0s;
	-o-transition: all .3s ease 0s;
	transition: all .3s ease 0s;
}

.navbar .navbar-brand h2 em {
	font-style: normal;
	color: #f33f3f;
}

#navbarResponsive {
	z-index: 999;
}

.navbar-collapse {
	text-align: center;
}

.navbar .navbar-nav .nav-item {
	margin: 0px 15px;
}

.navbar .navbar-nav a.nav-link {
	text-transform: capitalize;
	font-size: 15px;
	font-weight: 500;
	letter-spacing: 0.5px;
	color: #fff;
	transition: all 0.5s;
	margin-top: 5px;
}

.navbar .navbar-nav .nav-link:hover,
.navbar .navbar-nav .active > .nav-link,
.navbar .navbar-nav .nav-link.active,
.navbar .navbar-nav .nav-link.show,
.navbar .navbar-nav .show > .nav-link {
	color: #fff;
	padding-bottom: 25px;
	border-bottom: 3px solid #f33f3f;
}

.navbar .navbar-toggler-icon {
	background-image: none;
}

.navbar .navbar-toggler {
	border-color: #fff;
	background-color: #fff;
	height: 36px;
	outline: none;
	border-radius: 0px;
	position: absolute;
	right: 30px;
	top: 20px;
}

.navbar .navbar-toggler-icon:after {
	content: '\f0c9';
	color: #f33f3f;
	font-size: 18px;
	line-height: 26px;
	font-family: 'FontAwesome';
}

@media (max-width: 768px) {
	navbar-brand {
		float: none;
		font-size: 16px;
	}
}

@media (max-width: 768px) {
	.navbar .navbar-nav .nav-item {
		margin: 0px 5px;
	}
}

@media (max-width: 468px) {
	navbar-brand {
		float: none;
		font-size: 16px;
	}
}
</style>