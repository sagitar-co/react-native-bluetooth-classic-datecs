require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = package['name']
  s.version      = package['version']
  s.summary      = package['description']
  s.license      = package['license']

  s.authors      = package['author']
  s.homepage     = package['homepage']
  s.platform     = :ios, "9.0"

  s.source       = { :git => "git@gitlab.com:incognos/react-native-bluetooth-classic-datecs.git", :tag => "v#{s.version}" }
  s.source_files = "ios/**/*.{h,m,swift}"
  s.requires_arc = true
  s.homepage = "https://gitlab.com/incognos/react-native-bluetooth-classic-datecs.git"
  s.swift_version    = '4.1'

  s.dependency "React"
end
