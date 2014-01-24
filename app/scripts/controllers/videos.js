'use strict';

angular.module('gdgilSiteApp')
	.controller('VideosCtrl', function ($scope) {
		$scope.videos = [
			{
				title: 'Google Cloud Platform - What\'s Hot, New and Cool about it?',
				youtube: '6RVSTZJNgXY',
				speaker: 'Ido Green',
				description: 'How can developers leverage the \'mother of all clouds\' in their next project? Lots of options... :) That are using Google cloud platform. We will also see, how you built a powerful API on the cloud and use it from mobile and modern web apps.'
			},
            {
                title: 'The Magic of Crowd Testing [GDG CampusFest]',
                youtube: 'uMOFdqNapg8',
                speaker: 'Yair Bar-On',
                description: 'Yair\'s presentation will be a live crowd testing session, showing on stage how easy and powerful can crowd testing be. '
            },
            {
                title: 'Mobile Health [GDG CampusFest]',
                youtube: 'laQAO8xOVTg',
                speaker: 'Amit Safir',
                description: 'How is MobileOCT leveraging technical capabilities of smartphones to save the lives of a quarter million women around the globe?'
            },
            {
                title: 'Things you did not know about Drawables [GDG CampusFest]',
                youtube: 'OyIxhmQHnao',
                speaker: 'Ran Nachmany',
                description: 'We all use them on a daily basis but very few know how powerful and awesome they can be. Come and learn about Android Drawables, Shaders and other techniques that you can use to make your app more efficient and increase its sex appeal'
            },
            {
                title: 'Playing with the natives; the Android Youtube native player',
                youtube: 'iuoi_qztil4',
                speaker: 'Royi Ben Yosef',
                description: 'ever wanted to show youtube video in your app? well... here\'s how!'
            },
            {
                title: 'Angular.js & Firebase - The Magic of 3-way Databinding [GDG CampusFest]',
                youtube: '',
                speaker: 'Uri Shaked',
                description: 'Two-way data bindings is one of the core strength of Angular. By expanding this powerful concept, Firebase enables us to create real-time 3-way data binding - Between view, controller and backend. In this talk we are going to learn how to combine Angular.JS and Firebase to quickly build real-time web applications'
            },
            {
                title: '',
                youtube: '',
                speaker: '',
                description: ''
            },
		];
	});
