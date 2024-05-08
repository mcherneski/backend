import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsService extends Schema.Component {
  collectionName: 'components_layout_services';
  info: {
    displayName: 'Service';
    description: '';
  };
  attributes: {
    Service_Name: Attribute.String;
    Service_Description: Attribute.Text;
  };
}

export interface LayoutAboutSection extends Schema.Component {
  collectionName: 'components_layout_about_sections';
  info: {
    displayName: 'About Section';
    description: '';
  };
  attributes: {
    About_Header: Attribute.String;
    About_Content: Attribute.Blocks;
  };
}

export interface LayoutContactSection extends Schema.Component {
  collectionName: 'components_layout_contact_sections';
  info: {
    displayName: 'Contact Section';
  };
  attributes: {
    Contact_Header: Attribute.String;
    Contact_Copy: Attribute.Text;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    Hero_Header: Attribute.String;
    Hero_Image: Attribute.Media;
  };
}

export interface LayoutServicesSection extends Schema.Component {
  collectionName: 'components_layout_services_sections';
  info: {
    displayName: 'Services Section';
  };
  attributes: {
    Services_Header: Attribute.String;
    Service: Attribute.Component<'components.service', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.service': ComponentsService;
      'layout.about-section': LayoutAboutSection;
      'layout.contact-section': LayoutContactSection;
      'layout.hero-section': LayoutHeroSection;
      'layout.services-section': LayoutServicesSection;
    }
  }
}
