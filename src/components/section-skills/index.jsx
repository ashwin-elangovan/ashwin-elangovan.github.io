import React from 'react';
import Section from '../section';
import SummaryItem from '../summary-item';

import bash_light from "../../images/languages/light-mode/bash.png";
import c_light from "../../images/languages/light-mode/c.png";
import cpp_light from "../../images/languages/light-mode/c++.png";
import java_light from "../../images/languages/light-mode/java.png";
import javascript_light from "../../images/languages/light-mode/javascript.png";
import python_light from "../../images/languages/light-mode/python.png";
import ruby_light from "../../images/languages/light-mode/ruby.svg";
import go_light from "../../images/languages/light-mode/go.svg";

import django_light from "../../images/frameworks/light-mode/django.png";
import emberjs_light from "../../images/frameworks/light-mode/emberjs.png";
import flask_light from "../../images/frameworks/light-mode/flask.png";
import node_light from "../../images/frameworks/light-mode/nodejs.png";
import react_light from "../../images/frameworks/light-mode/react.png";
import rails_light from "../../images/frameworks/light-mode/ruby_on_rails.png";
import spring_light from "../../images/frameworks/light-mode/spring.png";
import tailwindcss_light from "../../images/frameworks/light-mode/tailwindcss.svg";

import apache_kafka_light from "../../images/tools and databases/light-mode/apache_kafka.png";
import aws_light from "../../images/tools and databases/light-mode/aws.png";
import azure_light from "../../images/tools and databases/light-mode/azure.png";
import confluence_light from "../../images/tools and databases/light-mode/confluence.png";
import docker_light from "../../images/tools and databases/light-mode/docker.png";
import elasticsearch_light from "../../images/tools and databases/light-mode/elasticsearch.svg";
import git_light from "../../images/tools and databases/light-mode/git.png";
import grafana_light from "../../images/tools and databases/light-mode/grafana.png";
import graphql_light from "../../images/tools and databases/light-mode/graphql.png";
import grpc_light from "../../images/tools and databases/light-mode/grpc.png";
import jenkins_light from "../../images/tools and databases/light-mode/jenkins.png";
import jira_light from "../../images/tools and databases/light-mode/jira.png";
import kubernetes_light from "../../images/tools and databases/light-mode/kubernetes.png";
import memcached_light from "../../images/tools and databases/light-mode/memcached.png";
import mongodb_light from "../../images/tools and databases/light-mode/mongodb.png";
import mysql_light from "../../images/tools and databases/light-mode/mysql.png";
import postgresql_light from "../../images/tools and databases/light-mode/postgresql.svg";
import redis_light from "../../images/tools and databases/light-mode/redis.svg";
import selenium_light from "../../images/tools and databases/light-mode/selenium.png";

import bash_dark from "../../images/languages/dark-mode/bash.png";
import c_dark from "../../images/languages/dark-mode/c.png";
import cpp_dark from "../../images/languages/dark-mode/c++.png";
import java_dark from "../../images/languages/dark-mode/java.png";
import javascript_dark from "../../images/languages/dark-mode/javascript.png";
import python_dark from "../../images/languages/dark-mode/python.png";
import ruby_dark from "../../images/languages/dark-mode/ruby.svg";
import go_dark from "../../images/languages/dark-mode/go.svg";

import django_dark from "../../images/frameworks/dark-mode/django.png";
import emberjs_dark from "../../images/frameworks/dark-mode/emberjs.png";
import flask_dark from "../../images/frameworks/dark-mode/flask.png";
import node_dark from "../../images/frameworks/dark-mode/nodejs.svg";
import react_dark from "../../images/frameworks/dark-mode/react.png";
import rails_dark from "../../images/frameworks/dark-mode/ruby_on_rails.png";
import spring_dark from "../../images/frameworks/dark-mode/spring.png";
import tailwindcss_dark from "../../images/frameworks/dark-mode/tailwindcss.svg";

import apache_kafka_dark from "../../images/tools and databases/dark-mode/apache_kafka.png";
import aws_dark from "../../images/tools and databases/dark-mode/aws.png";
import azure_dark from "../../images/tools and databases/dark-mode/azure.png";
import confluence_dark from "../../images/tools and databases/dark-mode/confluence.png";
import docker_dark from "../../images/tools and databases/dark-mode/docker.png";
import elasticsearch_dark from "../../images/tools and databases/dark-mode/elasticsearch.svg";
import git_dark from "../../images/tools and databases/dark-mode/git.png";
import grafana_dark from "../../images/tools and databases/dark-mode/grafana.png";
import graphql_dark from "../../images/tools and databases/dark-mode/graphql.png";
import grpc_dark from "../../images/tools and databases/dark-mode/grpc.png";
import jenkins_dark from "../../images/tools and databases/dark-mode/jenkins.png";
import jira_dark from "../../images/tools and databases/dark-mode/jira.png";
import kubernetes_dark from "../../images/tools and databases/dark-mode/kubernetes.png";
import memcached_dark from "../../images/tools and databases/dark-mode/memcached.png";
import mongodb_dark from "../../images/tools and databases/dark-mode/mongodb.png";
import mysql_dark from "../../images/tools and databases/dark-mode/mysql.png";
import postgresql_dark from "../../images/tools and databases/dark-mode/postgresql.svg";
import redis_dark from "../../images/tools and databases/dark-mode/redis.svg";
import selenium_dark from "../../images/tools and databases/dark-mode/selenium.png";

const SectionSkills = ({ skills }) => {
  let darkImagesArray = null;
  let lightImagesArray = null;
  return (
    <Section title="Skills">
      {skills.map((skill) => {
        switch (skill.key) {
          case "languages":
            darkImagesArray = [python_dark, javascript_dark, ruby_dark, java_dark, c_dark, cpp_dark, go_dark, bash_dark];
            lightImagesArray = [python_light, javascript_light, ruby_light, java_light, c_light, cpp_light, go_light, bash_light];
            break;
          case "frameworks":
            darkImagesArray = [node_dark, react_dark, rails_dark, django_dark, spring_dark, flask_dark, emberjs_dark, tailwindcss_dark];
            lightImagesArray = [node_light, react_light, rails_light, django_light, spring_light, flask_light, emberjs_light, tailwindcss_light];
            break;
          case "tools":
            darkImagesArray = [
              mysql_dark, postgresql_dark, redis_dark, aws_dark, docker_dark,
              kubernetes_dark, mongodb_dark, jenkins_dark, graphql_dark, grpc_dark,
              apache_kafka_dark, memcached_dark, elasticsearch_dark, grafana_dark,
              azure_dark, confluence_dark, git_dark, jira_dark, selenium_dark
            ];
            lightImagesArray = [
              mysql_light, postgresql_light, redis_light, aws_light, docker_light,
              kubernetes_light, mongodb_light, jenkins_light, graphql_light, grpc_light,
              apache_kafka_light, memcached_light, elasticsearch_light, grafana_light,
              azure_light, confluence_light, git_light, jira_light, selenium_light
            ];
            break;
          default:
            // No case possible
        }
        return (
          <SummaryItem
            source="Skills"
            key={skill.title}
            titleName={skill.title}
            description={skill.description}
            subdescription={skill.subdescription}
            tags={skill.tags}
            images={[lightImagesArray, darkImagesArray]}
            sectionHighlight={false}
          />
        );
      })}
    </Section>
  );
};

export default SectionSkills;
