<p align="center">
  <h3 align="center">https://github.com/beigenut/fds-ex-ecommerce-react</h3>
  <p align="center">
  Build a `eCommerce` using REACT; Context API. <br> The site offers Administrator features including `Add-new-product. <br> <a href="https://react-ecommerce.netlify.com/" target="_blank"> View website</a> <br>
  Please follow the login instructor on Login Page :)
</p>
</p>

_ _ _


## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* Getting Started
  * [Prerequisites](#prerequisites)
* [Usage](#usage)
* [Contributing](#contributing)
* [Contact](#contact)

## About The Project

<img src="https://drive.google.com/uc?export=view&id=17TC7G-730wLkTwbZuYJ1vu3uESVDkoEs" width="700px">

Build Ecommerce Web using React. 

There is a container containing components separated by function. `States` from the high-level component gives thoes as `props` through the `Consumer` and `Provider`.

Features :

- New arrivals; Load the most recently added product. 
- `Subcribes`; Send email to administrator.
- `Cart`; Add item(s) on cart and calculate total price.
- Product detail page.
- Product `review`; Write and delete review via authorization. 
- `Add new product`; Post new product and related attribute(s) through Axios request.



### Built With
* [React](https://reactjs.org/)
* [React-dom](https://www.npmjs.com/package/react-dom)
* [React-router-dom](https://www.npmjs.com/package/react-router-dom)
* [Axios](https://github.com/axios/axios)
* [React-bootstrap](https://react-bootstrap.github.io/)
* [bulma](https://bulma.io)
* [glitch server](https://glitch.com/)


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
 
`npm i react-create-app react-router-dom axios node-sass `

<!-- USAGE EXAMPLES -->
## Usage

#### Context; Handling functions

Context basic structure

```js
class ProductProvider extends React.Component {
  state = {
    category: '',    
    products: [],   // data array via axios get request
    loading: false, // for loading indicator
  };
  async componentDidMount() {
    await this.loadProducts(this.state.category);
  }
  loadProducts = async category => {
    const res = await mallAPI.get(...)
    const arr = res.data.map(p => ({ ... }))
    this.setState({products: arr});
  }

  render() {
    //...
  }
}
```
To use `Provieder` and `Consumer` components providing from React ContextAPI, pass the functions including the state(s) which are `value` prop to the subcomponent.

```js
  render() {
    const value = {
      ...this.state,
      onCategory: this.handleChangeCategory
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }

  export { ProductProvider, Consumer as ProductConsumer };
```


According to the controled component name regulation, put `handleChange...`

```js
  handleChangeCategory = async category => {
    await this.loadProducts(category);
  };
```

<br></br>

#### Register multiful attributes

On `addAttributeForm.js`

State structure

```js
state = {
  attCount: 1,
  attributes: [
    {
      //...SKU, color, size etc
    },
  ]
};
```

Honestly, could not fully understand the code below. However, this code is used for handling mutiful row controlled components; input.

```js
handleAttributeChangeAttrSKU = idx => evt => {
  const newattributes = this.state.attributes.map((attribute, sidx) => {
    if (idx !== sidx) return attribute;
    return { ...attribute, attrSKU: evt.target.value };
  });
  this.setState({ attributes: newattributes });
};
```

```jsx
{this.state.attributes.map((attribute, idx) => (
  <input
    type="text"
    value={attribute.attrSKU}
    onChange={this.handleAttributeChangeattrSKU(idx)}
  />
)}
```

<img src="https://drive.google.com/uc?export=view&id=1Q5Q1rZVWcYrWrsf-Vi1B215sPhcEUlA4" width="700px">

#### User Info

The information of the logged-in user is stored in `localStorage.`

<br>

#### Team project GIT control


1.  Create `feature` branch
2.  Check current branch location on VS CODE and Terminal
3.

```
git add, commit -m '...'
git push origin `feature`
```

4.

```
git checkout
```

5.  Check current branch location is on `Develop`
6.

```
git merge `feature`
git push origin develop
```

7.  To delete the `feature` branch

```
git branch -D `feature`   (local)
git push origin --delete `feature`    (remote)
git branch
```


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/beigenut/fds-ex-ecommerce-react](https://github.com/beigenut/fds-ex-ecommerce-react)



