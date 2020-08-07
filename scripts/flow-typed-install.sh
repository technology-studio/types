#!/bin/bash
function flow_typed_install_local() {
	local package=$1
	local local_repo_path=../com.github.flow-type-community.flow-typed-unsafe/definitions/override/
	local_alternative=`echo $package|sed 's/\(\.*\)@\([0-9]*\)\.\([0-9]*\).*/\1_v\2.\3.x.js/'`
	echo "searching for local alternative: $local_alternative"
	if [ -f $local_repo_path$local_alternative ]; then
	 	echo "alternative found, installing to flow-typed/override folder"
		mkdir -p flow-typed/override
		cp $local_repo_path$local_alternative flow-typed/override/
	else 
		echo "alternative not found..."
		exit 1
	fi
}

package_name=$1

if [ ! -z $package_name ]; then
	package=`yarn why $package_name | grep -s Found | head -n 1 | awk '{ printf $4 }'|sed 's/"//g'`
	if [ -z $package ]; then
		echo "package not installed"
		exit 1
	fi
	yarn flow-typed install $package || flow_typed_install_local $package
else 
	echo -e "usage: $0 <package_name>"
	exit 1
fi
