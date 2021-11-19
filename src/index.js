import './sass/main.scss';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from "axios";
import SimpleLightbox from 'simplelightbox';

export async function getImg(name, page) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${name}&safesearch=true&per_page=40&page=${page}&key=24426317-0934d3933860248e2f67d0ecb`;
    return await axios.get(url);
}